// Feature URL Configuration
// This file manages OPTIONAL URL overrides for feature cards
// If no override is specified, the URLs from AppContext items will be used

export interface FeatureUrlConfig {
  index: number;
  url: string;
  openInNewTab?: boolean;
  description?: string; // Optional description for documentation
}

// OPTIONAL URL overrides - only add entries here if you want to override the default URLs
// The default URLs are defined in AppContext.tsx items
// Priority: Override > externalUrl > url > generated > fallback
export const FEATURE_URL_OVERRIDES: FeatureUrlConfig[] = [
  // Removed Chrome Web Store override - now using externalUrl in the item
  // Add custom overrides here only when needed
  // Leave empty to use URLs from AppContext items
];

// Helper function to get URL for a specific feature with enhanced priority system
export const getFeatureUrl = (index: number, item?: any): string => {
  // Priority 1: Check for custom URL override (highest priority)
  const override = FEATURE_URL_OVERRIDES.find(
    (config) => config.index === index
  );
  if (override) {
    return override.url;
  }

  // Priority 2: Use external URL from AppContext item (new priority level)
  if (item?.externalUrl) {
    return item.externalUrl;
  }

  // Priority 3: Use default URL from AppContext item
  if (item?.url) {
    return item.url;
  }

  // Priority 4: Generate URL from title (fallback)
  if (item?.title) {
    const slug = item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return `/features/${slug}`;
  }

  // Priority 5: Default fallback
  return `/features/feature-${index}`;
};

// Helper function to get tab behavior with enhanced priority system
export const getFeatureTabBehavior = (index: number, item?: any): boolean => {
  // Priority 1: Check override configuration
  const override = FEATURE_URL_OVERRIDES.find(
    (config) => config.index === index
  );
  if (override && override.openInNewTab !== undefined) {
    return override.openInNewTab;
  }

  // Priority 2: Use setting from AppContext item (works for both externalUrl and url)
  if (item?.openInNewTab !== undefined) {
    return item.openInNewTab;
  }

  // Priority 3: Default behavior - external URLs open in new tab, internal URLs use default
  if (item?.externalUrl) {
    return true; // External URLs should typically open in new tab
  }

  // Priority 4: Default to new tab
  return true;
};

// Helper function to check if a feature has a custom URL override
export const hasCustomUrl = (index: number): boolean => {
  return FEATURE_URL_OVERRIDES.some((config) => config.index === index);
};

// Helper function to check if a feature uses an external URL
export const hasExternalUrl = (item?: any): boolean => {
  return !!item?.externalUrl;
};

// Helper function to get URL type for analytics
export const getUrlType = (
  index: number,
  item?: any
): "override" | "external" | "default" | "generated" | "fallback" => {
  const override = FEATURE_URL_OVERRIDES.find(
    (config) => config.index === index
  );
  if (override) return "override";
  if (item?.externalUrl) return "external";
  if (item?.url) return "default";
  if (item?.title) return "generated";
  return "fallback";
};

// Helper function to get all configured custom URL overrides
export const getAllCustomUrls = (): FeatureUrlConfig[] => {
  return FEATURE_URL_OVERRIDES;
};

// Validation function to ensure indices are within bounds
export const validateFeatureConfig = (maxFeatures: number): string[] => {
  const errors: string[] = [];

  FEATURE_URL_OVERRIDES.forEach((config) => {
    if (config.index < 0 || config.index >= maxFeatures) {
      errors.push(
        `Invalid index ${config.index}: must be between 0 and ${
          maxFeatures - 1
        }`
      );
    }

    if (!config.url || !config.url.trim()) {
      errors.push(`Empty URL for index ${config.index}`);
    }
  });

  return errors;
};
