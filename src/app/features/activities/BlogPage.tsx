import { Container, Header, Segment} from "semantic-ui-react";

export default function BlogPage() {
  return (
    <Segment inverted textAlign='center' vertical >
      <Container>
        <Header as='h1' inverted>
          {/* <Image size='massive' src='/logo.png' alt='logo' style={{marginBottom: 12}}/> */}
          BLOGS

        </Header>
        
      </Container>
    </Segment>
  )
}