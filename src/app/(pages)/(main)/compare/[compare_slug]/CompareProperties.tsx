"use client";
import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import ComparisonTable from "../_components/ComparisonTable";
import CompareModal from "../_components/CompareModal";
import { PropertyProps } from "@/types/types";
import BasicDetailTable from "../_components/BasicDetailTable";
import MainGridCard from "../_components/MainGridCard";
import { useRouter } from "next/navigation";
import { getProfile } from "@/contexts/getAssets";
import Breadcrumb from "../../../../../components/breadcrumbs/breadcrumbs";
import CompareLoader from "@/components/Loader/Compare/CompareLoader";
import { LuLink } from "react-icons/lu";
import Link from "next/link";
import { generateSlug } from "@/contexts/Callbacks";
import { mockProperties } from "./mock-data";

const CompareProperties = ({ slugs }: { slugs?: string[] }) => {
  const [selectedProperties, setSelectedProperties] = useState<PropertyProps[]>(
    []
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [allProperties, setAllProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadMockData = () => {
      setTimeout(() => {
        setAllProperties(mockProperties);
        setDataLoaded(true);
        setLoading(false);
      }, 1000);
    };

    loadMockData();
  }, []);

  useEffect(() => {
    if (dataLoaded && allProperties.length > 0) {
      if (slugs && slugs.length > 0) {
        const matchedProperties = allProperties.filter((prop) =>
          slugs.includes(prop.property_slug)
        );
        setSelectedProperties(matchedProperties);
      }
    }
  }, [dataLoaded, allProperties, slugs]);

  useEffect(() => {
    const handleOpenModal = () => setModalOpen(true);
    const handleDeselectAll = () => {
      setSelectedProperties([]);
      router.push("/compare/select");
    };

    window.addEventListener("openCompareModal", handleOpenModal);
    window.addEventListener("deselectAll", handleDeselectAll);

    return () => {
      window.removeEventListener("openCompareModal", handleOpenModal);
      window.removeEventListener("deselectAll", handleDeselectAll);
    };
  }, [router]);

  const navigateToCompare = useCallback(
    (properties: PropertyProps[]) => {
      if (properties.length === 0) {
        router.push("/compare/select");
      } else {
        const slugs = properties.map((prop) => prop.property_slug).join("-vs-");
        router.push(`/compare/${slugs}`);
      }
    },
    [router]
  );

  const handleSetSelectedProperties = useCallback(
    (properties: PropertyProps[]) => {
      setSelectedProperties(properties);
      navigateToCompare(properties);
    },
    [navigateToCompare]
  );

  const removeProperty = useCallback(
    (property: PropertyProps) => {
      const updated = selectedProperties.filter(
        (p) => p.uniqueId !== property.uniqueId
      );
      setSelectedProperties(updated);
      navigateToCompare(updated);
    },
    [selectedProperties, navigateToCompare]
  );

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    if (selectedProperties.length === 0) {
      router.push("/compare/select");
    }
  }, [selectedProperties.length, router]);

  const SaveCompare = useCallback(async () => {
    try {
      const user = await getProfile();
      const properties = selectedProperties.map((item) => item.uniqueId);
      const payload = { userId: user?.uniqueId, properties };

      if (properties.length > 0) {
        console.log("Mock saving comparison:", payload);
      }
    } catch (error) {
      console.log(error);
    }
  }, [selectedProperties]);

  const hasSavedCompare = useRef(false);

  useEffect(() => {
    if (!hasSavedCompare.current && selectedProperties.length > 0) {
      SaveCompare();
      hasSavedCompare.current = true;
    }
  }, [SaveCompare, selectedProperties]);

  if (loading) {
    return <CompareLoader />;
  }

  return (
    <div className="bg-[var(--secondary-bg)] text-[var(--primary-text)] max-w-7xl mx-auto px-2 sm:px-8 py-10 space-y-6">
      <div className="">
        <div>
          <Breadcrumb items={[{ label: "Compare" }]} />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProperties.length === 0 &&
            Array.from({ length: 3 }).map((_, index) => (
              <MainGridCard
                key={`empty-${index}`}
                title="Add College"
                onClick={() => setModalOpen(true)}
                index={index}
              />
            ))}
        </div>
        {modalOpen && (
          <CompareModal
            allProperties={allProperties}
            selectedProperties={selectedProperties}
            onClose={handleModalClose}
            setSelectedProperties={handleSetSelectedProperties}
          />
        )}

        {selectedProperties.length > 0 && (
          <div>
            <BasicDetailTable
              selectedProperties={selectedProperties}
              removeProperty={removeProperty}
            />
          </div>
        )}

        {selectedProperties.length >= 2 && (
          <div className="mb-20">
            <ComparisonTable selectedProperties={selectedProperties} />

            <div className="bg-[var(--secondary-bg)] text-[var(--secondary-text)] rounded-b-2xl shadow-custom border-x border-b border-[var(--primary-border)] overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className="text-left p-4 font-semibold min-w-[160px] sub-heading">
                        Visit College
                      </td>
                      {selectedProperties.map((prop, idx) => (
                        <td
                          key={idx}
                          className="text-center p-4 last:border-r-0 min-w-[200px]"
                        >
                          <Link
                            href={`/${generateSlug(prop.category)}/${prop.property_slug
                              }`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] rounded-custom font-medium transition-all duration-200 hover:scale-105 hover:shadow-custom paragraph"
                          >
                            Visit
                            <LuLink />
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareProperties;