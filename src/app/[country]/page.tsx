export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const { country } = await params;
  return <div>{country}</div>;
}
