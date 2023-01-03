// async function getPost(slug:any) {
//     const res = await fetch('...');
//     return res.json();
//   }
  
//   export default async function Head({ params }:{params:any}) {
//     const post = await getPost(params.slug);
  
//     return (
//       <>
//         <title>{post.title}</title>
//       </>
//     )
//   }

export default function Head() {
    return (
      <>
        <title>Tourvis post</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
      </>
    );
  }