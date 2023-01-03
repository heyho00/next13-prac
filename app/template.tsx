export default function Template({ children }: {
    children: React.ReactNode
  }) {
    return <div style={{backgroundColor:'teal'}}>template{children}</div>;
  }