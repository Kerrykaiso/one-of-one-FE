import { AccountForm } from "../components/forms/SimpleForm";import { Container, Eyebrow } from "../components/ui/Primitives";
export default function Login(){return <Container className="account-page"><div><Eyebrow>Customer account</Eyebrow><h1>WELCOME<br/>BACK.</h1><p>Your collected editions, all in one place.</p></div><div><h2>Sign in</h2><AccountForm/></div></Container>}
