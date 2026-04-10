import PartnerUniversities from "@/components/PartnerUniversities";
import { Box } from "@mui/material";

export const metadata = {
  title: "Our Partner Global Universities | World Citizen Consultants",
  description: "Explore our wide network of partner universities and colleges across the globe.",
};

export default function PartnerUniversitiesPage() {
  return (
    <Box component="main">
      <PartnerUniversities />
    </Box>
  );
}
