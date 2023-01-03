export default function RootLayout({ children }:{
  children : React.ReactNode;
}) {
    return (
      <html lang="en">
        <head />
        <body>
          <div style={{backgroundColor:"yellow"}}>
            노란색app-layout
            {children}
          </div>
        </body>
      </html>
    );
  }