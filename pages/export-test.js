import dynamic from 'next/dynamic';

const ExportTestComponent = dynamic(
  () => import('components/Doodle/export-test'),
  {
    ssr: false,
  }
);

export default function ExportTestPage() {
  return (
    <>
      <ExportTestComponent />
    </>
  );
}
