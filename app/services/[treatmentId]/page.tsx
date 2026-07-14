import TreatmentDetailPage from '../../../components/TreatmentDetailPage';

export default async function ServiceTreatmentPage({
  params,
}: {
  params: Promise<{ treatmentId: string }>;
}) {
  const { treatmentId } = await params;

  return <TreatmentDetailPage treatmentId={treatmentId} />;
}
