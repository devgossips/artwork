import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import SelectArtwork from 'components/select-artwork-page/SelectArtwork';

export default function SelectArtworkPage() {
  return (
    <Layout>
      <PageHeader title="Make your art" />

      <SelectArtwork />
    </Layout>
  );
}
