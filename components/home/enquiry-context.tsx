"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { BusinessType, PackageId, ProductId } from "@/data/home";
import { scrollToId } from "@/lib/scroll";

export type InterestId = ProductId | "package";

type EnquiryContextValue = {
  interests: InterestId[];
  packageId: PackageId | null;
  business: BusinessType | "";
  setBusiness: (b: BusinessType | "") => void;
  setPackageId: (p: PackageId | null) => void;
  toggleInterest: (id: InterestId) => void;
  setInterests: (interests: InterestId[]) => void;
  /** Preselect a product, then scroll to the form */
  enquireProduct: (id: ProductId) => void;
  /** Preselect a suite package, then scroll to the form */
  enquirePackage: (id: PackageId) => void;
  /** Preselect a business type, then scroll to the form */
  enquireAs: (b: BusinessType) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export const ENQUIRY_SECTION_ID = "enquiry";
export const ENQUIRY_FIRST_FIELD_ID = "enquiry-name";

function goToForm() {
  scrollToId(ENQUIRY_SECTION_ID);
  // Move focus once the scroll has settled, without a second jump.
  window.setTimeout(() => {
    document.getElementById(ENQUIRY_FIRST_FIELD_ID)?.focus({ preventScroll: true });
  }, 1100);
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [interests, setInterests] = useState<InterestId[]>([]);
  const [packageId, setPackageId] = useState<PackageId | null>(null);
  const [business, setBusiness] = useState<BusinessType | "">("");

  const toggleInterest = useCallback((id: InterestId) => {
    setInterests((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }, []);

  const value = useMemo<EnquiryContextValue>(
    () => ({
      interests,
      packageId,
      business,
      setBusiness,
      setPackageId,
      toggleInterest,
      setInterests,
      enquireProduct: (id) => {
        setInterests([id]);
        setPackageId(null);
        goToForm();
      },
      enquirePackage: (id) => {
        setInterests(["package"]);
        setPackageId(id);
        goToForm();
      },
      enquireAs: (b) => {
        setBusiness(b);
        goToForm();
      },
    }),
    [interests, packageId, business, toggleInterest],
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}
