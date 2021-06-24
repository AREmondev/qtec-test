let allProducts = [
  {
    id: 1,
    productName: 'Leather  Shoes ',
    productPrice: 220,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvM2Q2NTE5OGFjZjcwLTUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiYXV0byIsImhlaWdodCI6ImF1dG8iLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjEwMH19fQ==',
  },
  {
    id: 2,
    productName: 'Sneakers Shoes ',
    productPrice: 99,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNzA4MWI1YWY3ZDU0LTM0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ImF1dG8iLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5IjoxMDB9fX0=',
  },
  {
    id: 3,
    productName: 'Havit Bluetooth   ',
    productPrice: 40,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvYmZhOTExNjQzMWUxLWU5ZTc1MjMyMGVlZC0xNWZiMjZlMjY1MWZlNDYyMWI2ZjgxNjdjYjdjODk4Zi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiJhdXRvIiwiaGVpZ2h0IjoiYXV0byIsImZpdCI6ImNvbnRhaW4ifSwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX0sImZsYXR0ZW4iOnRydWUsImpwZWciOnsicXVhbGl0eSI6MTAwfX19',
  },
  {
    id: 4,
    productName: 'Windows10 Mini PC',
    productPrice: 710,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNzExYjFlMDg0ZWE4LTIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiYXV0byIsImhlaWdodCI6ImF1dG8iLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjEwMH19fQ==',
  },
  {
    id: 5,
    productName: 'OPPO F17pro  ',
    productPrice: 480,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvZjNhMDU1ZmQxYmY2LWYxN3Byby04Z2ItMTI4Z2ItYmxhY2stMDEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiYXV0byIsImhlaWdodCI6ImF1dG8iLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjEwMH19fQ==',
  },
  {
    id: 6,
    productName: 'Loud-505 Pro',
    productPrice: 33,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvM2Q2NTE5OGFjZjcwLTUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiYXV0byIsImhlaWdodCI6ImF1dG8iLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjEwMH19fQ==',
  },
  {
    id: 7,
    productName: 'Digital Watch',
    productPrice: 45,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNjgyMDZkZmU3MGVlLTEwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5IjoxMDB9fX0=',
  },
  {
    id: 8,
    productName: 'Digital Watch',
    productPrice: 137,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNjgyMDZkZmU3MGVlLTEwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5IjoxMDB9fX0=',
  },
  {
    id: 9,
    productName: 'Man Shart',
    productPrice: 123,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvZDg2YTBlMmY1MGU3LTUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjEwMH19fQ==',
  },
  {
    id: 10,
    productName: 'Man Lather Balt',
    productPrice: 110,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNWFkNDgzNjdkZjIxLTUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiYXV0byIsImhlaWdodCI6ImF1dG8iLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjEwMH19fQ==',
  },
  {
    id: 11,
    productName: 'Wamen Dress',
    productPrice: 440,
    productImg:
      'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvYTdhZDM4MmUwYWZlLXByLTI4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5IjoxMDB9fX0=',
  },
]
