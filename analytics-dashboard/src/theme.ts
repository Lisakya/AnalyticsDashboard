
import { extendTheme as chakraExtendTheme } from "@chakra-ui/react";

export const theme = chakraExtendTheme({
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    brand: {
      50: "#e5f0ff",
      100: "#b8d4ff",
      200: "#8ab9ff",
      300: "#5c9eff",
      400: "#2e83ff",
      500: "#146ae6", // primary blue
      600: "#0e51b0",
      700: "#08397f",
      800: "#03204d",
      900: "#00091d",
    },
    accent: {
      50: "#f2fbff",
      100: "#d6f0ff",
      200: "#b8e7ff",
      300: "#99ddff",
      400: "#7bd3ff",
      500: "#5cc9ff", // secondary color
      600: "#47a1cc",
      700: "#327999",
      800: "#1e5366",
      900: "#092c33",
    },
    success: {
      500: "#38b2ac",
    },
    warning: {
      500: "#f6ad55",
    },
    error: {
      500: "#e53e3e",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "medium",
        borderRadius: "md",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "lg",
          overflow: "hidden",
          boxShadow: "md",
          border: "1px solid",
          borderColor: "gray.200",
          transition: "transform 0.2s, box-shadow 0.2s",
          _hover: {
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
        },
      },
    },
  },
});
