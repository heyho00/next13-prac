export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <section style={{backgroundColor:'pink'}}>
      핑크색dashboard-layout
      {children}
    </section>
  )
}