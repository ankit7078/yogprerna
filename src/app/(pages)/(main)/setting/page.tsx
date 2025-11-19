import SettingsPage from './features/settings/SettingsPage';

export default function DefaultSettingsPage({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  return <SettingsPage tab={searchParams.tab}  />;
}