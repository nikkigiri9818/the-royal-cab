import { notFound } from "next/navigation";
import TaxiDetailPage from "@/app/taxicompontents/TaxiDetailPage";
import { taxiDetailData } from "@/app/taxicompontents/TaxiDetailData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TaxiSlugPage({ params }: Props) {
  const { slug } = await params;

  const data =
    taxiDetailData[
      slug as keyof typeof taxiDetailData
    ];

  if (!data) {
    notFound();
  }

  return <TaxiDetailPage data={data} />;
}