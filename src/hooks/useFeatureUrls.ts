import { useCallback, useMemo } from "react";
import {
  getFeatureUrl,
  getFeatureTabBehavior,
  hasCustomUrl,
  hasExternalUrl,
  getUrlType,
  validateFeatureConfig,
  FEATURE_URL_OVERRIDES,
  type FeatureUrlConfig,
} from "../config/featureUrls";

interface UseFeatureUrlsReturn {
  getUrl: (index: number, item?: any) => string;
  getTabBehavior: (index: number, item?: any) => boolean;
  isCustomUrl: (index: number) => boolean;
  isExternalUrl: (item?: any) => boolean;
  getUrlType: (index: number, item?: any) => string;
  handleFeatureClick: (feature: any, index: number) => void;
  customUrls: FeatureUrlConfig[];
  validationErrors: string[];
}

export const useFeatureUrls = (
  maxFeatures: number = 12
): UseFeatureUrlsReturn => {
  // Validate configuration on hook initialization
  const validationErrors = useMemo(() => {
    return validateFeatureConfig(maxFeatures);
  }, [maxFeatures]);

  // Memoize custom URL overrides to avoid recalculation
  const customUrls = useMemo(() => {
    return FEATURE_URL_OVERRIDES;
  }, []);

  // Get URL for a feature using enhanced priority system
  const getUrl = useCallback((index: number, item?: any): string => {
    return getFeatureUrl(index, item);
  }, []);

  // Get tab behavior for a feature using enhanced priority system
  const getTabBehavior = useCallback((index: number, item?: any): boolean => {
    return getFeatureTabBehavior(index, item);
  }, []);

  // Check if feature has custom URL override (not just item URL)
  const isCustomUrl = useCallback((index: number): boolean => {
    return hasCustomUrl(index);
  }, []);

  // Check if feature uses external URL
  const isExternalUrl = useCallback((item?: any): boolean => {
    return hasExternalUrl(item);
  }, []);

  // Get URL type for analytics
  const getUrlTypeCallback = useCallback(
    (index: number, item?: any): string => {
      return getUrlType(index, item);
    },
    []
  );

  // Enhanced click handler with comprehensive analytics and error handling
  const handleFeatureClick = useCallback(
    (feature: any, index: number) => {
      try {
        const url = getUrl(index, feature);
        const openInNewTab = getTabBehavior(index, feature);
        const urlType = getUrlType(index, feature);

        // Enhanced analytics tracking with URL type detection
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "feature_click", {
            event_category: "engagement",
            event_label: `${feature.title} -> ${url}`,
            feature_index: index,
            url_type: urlType,
            is_external: isExternalUrl(feature),
            is_override: isCustomUrl(index),
            opens_new_tab: openInNewTab,
          });
        }

        // Console logging for development with detailed info
        const logData = {
          feature: feature.title,
          index,
          url,
          urlType,
          isExternal: isExternalUrl(feature),
          isOverride: isCustomUrl(index),
          openInNewTab,
        };

        if (urlType === "override") {
          console.log(`🔧 Custom URL override:`, logData);
        } else if (urlType === "external") {
          console.log(`🌐 External URL:`, logData);
        } else if (urlType === "default") {
          console.log(`📄 Default URL:`, logData);
        } else {
          console.log(`⚙️  Generated/Fallback URL:`, logData);
        }

        // Navigate based on configuration
        if (openInNewTab) {
          window.open(url, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = url;
        }
      } catch (error) {
        console.error(`❌ Error navigating to feature ${index}:`, error);

        // Enhanced fallback system
        let fallbackUrl = "";
        if (feature.externalUrl) {
          fallbackUrl = feature.externalUrl;
        } else if (feature.url) {
          fallbackUrl = feature.url;
        } else {
          fallbackUrl = `/features/feature-${index}`;
        }

        console.log(`🔄 Using fallback URL: ${fallbackUrl}`);
        window.open(fallbackUrl, "_blank");
      }
    },
    [getUrl, getTabBehavior, isCustomUrl, isExternalUrl, getUrlType]
  );

  return {
    getUrl,
    getTabBehavior,
    isCustomUrl,
    isExternalUrl,
    getUrlType: getUrlTypeCallback,
    handleFeatureClick,
    customUrls,
    validationErrors,
  };
};

// Enhanced hook for admin/debugging purposes
export const useFeatureUrlsAdmin = () => {
  const { customUrls, validationErrors } = useFeatureUrls();

  const logConfiguration = useCallback(() => {
    console.group("🔧 Feature URLs Configuration");
    console.log("📋 Custom URL Overrides:", customUrls);
    console.log("⚠️  Validation Errors:", validationErrors);
    console.log("📍 URL Priority Order:");
    console.log("  1. 🏆 Custom Overrides (featureUrls.ts)");
    console.log("  2. 🌐 External URLs (items.externalUrl)");
    console.log("  3. 📄 Default URLs (items.url)");
    console.log("  4. ⚙️  Generated URLs (from title)");
    console.log("  5. 🔄 Fallback URLs (default pattern)");
    console.groupEnd();
  }, [customUrls, validationErrors]);

  const getConfigSummary = useCallback(() => {
    return {
      totalOverrides: customUrls.length,
      validationErrors: validationErrors.length,
      overrideIndices: customUrls.map((config) => config.index),
      externalOverrides: customUrls.filter(
        (config) =>
          config.url.startsWith("http://") || config.url.startsWith("https://")
      ).length,
      prioritySystem: [
        "Custom Overrides (highest)",
        "External URLs",
        "Default URLs",
        "Generated URLs",
        "Fallback URLs (lowest)",
      ],
      note: "External URLs in items take priority over default URLs",
    };
  }, [customUrls, validationErrors]);

  return {
    logConfiguration,
    getConfigSummary,
    customUrls,
    validationErrors,
  };
};
