"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { BusinessType, ProductId } from "@/data/home";
import type { ComboId as PackageId } from "@/data/combos";
import { useRouter } from "next/navigation";

export type InterestId = ProductId | "package";

type EnquiryContextValue = {
  interests: InterestId[];
  packageId: PackageId | null;
  business: BusinessType | "";
  setBusiness: (b: BusinessType | "") => void;
  setPackageId: (p: PackageId | null) => void;
  toggleInterest: (id: InterestId) => void;
  setInterests: (interests: InterestId[]) => void;
  /** Preselect a product, then go to the contact page */
  enquireProduct: (id: ProductId) => void;
  /** Preselect a suite package, then go to the contact page */
  enquirePackage: (id: PackageId) => void;
  /** Preselect a business type, then go to the contact page */
  enquireAs: (b: BusinessType) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export const ENQUIRY_SECTION_ID = "enquiry";
export const ENQUIRY_FIRST_FIELD_ID = "enquiry-name";

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const goToForm = useCallback(() => router.push("/contact"), [router]);
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
    [interests, packageId, business, toggleInterest, goToForm],
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}
