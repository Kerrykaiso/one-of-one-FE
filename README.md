This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

APIs
USER GOOGLE AUTH
URL: http://localhost:8000/auth/user/google-auth
METHOD: GET
RESULT: {
"data" :string,
"message":string
}

DESIGNER GOOGLE AUTH
URL: http://localhost:8000/auth/designer/google-auth
METHOD: GET
RESULT: {
"data" :string,
"message":string
}

GET ALL PRODUCTS
URL: http://localhost:8000/product/api/product/all-product
METHOD: GET
OPTIONAL FOR FILTER QUERIES:  ?color=string ?size=string ?artist=string
EVERY REQUEST QUERY: ?page=int ?cursor=int
RESULT: {
"cache": boolean,
"createdAt": string,
"nextCursor": integer,
"message":string,
"nextPage":int,
"data":[]
}
 //DATA ARRAY CONTENT
 "data":[
  {
   "productName":string,
 "productId": string,
 "designerEmail": string,
  "designerName": string,
  "status": string,
  "size": string,
  "color": string,
  "cursor": integer,
  "productStory": string,
  "frontImage": string,
  "owner": string,
  "backImage": string,
  "CreatedAt": string,
  "UpdatedAt": string
  }
 ]

 GET ALL PRODUCT BY ID
URL: http://localhost:8000/product/api/product/:productId
METHOD: GET
RESULT:   {
   "productName":string,
 "productId": string,
 "designerEmail": string,
  "designerName": string,
  "productStory":string
  "status": string,
  "size": string,
  "color": string,
  "cursor": integer,
  "frontImage": string,
  "owner": string,
  "backImage": string,
  "CreatedAt": string,
  "UpdatedAt": string
  }
   GET ALL PRODUCT RELATED TO ARTIST (MORE FROM X)
URL: http://localhost:8000/product/all-product?artistName
METHOD: GET
RESULT: {
"message":string,
"data":[]
}
 //DATA ARRAY CONTENT
 "data":[
  {
   "productName":string,
 "productId": string,
 "designerEmail": string,
  "designerName": string,
  "status": string,
  "size": string,
  "color": string,
  "cursor": integer,
  "productStory": string,
  "frontImage": string,
  "owner": string,
  "backImage": string,
  "CreatedAt": string,
  "UpdatedAt": string
  }
 ]

   GET ALL COLORS
URL: http://localhost:8000/designer/api/get-colors
METHOD: GET
RESULT :{
 "message" :string
 "data":[]
}
 //DATA ARRAY CONTENT
data:[
{
"color" :string,
"hexCode" :string
}
]

BUY SHIRT
URL: http://localhost:8000/payment/api/initialize-payment
METHOD: POST
BODY: email string 
		amount int 
	 productId string 
	 designerName string 
		designerEmail string 
		productName string 
		phoneNumber string
		owner string 
		address string 
		state string
  country string

  CHECKOUT FORM FIELDS (ALL FIELDS REQUIRED)
  owner string
  email string
  phoneNumber string
  address string
  country string
  state string
  
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
