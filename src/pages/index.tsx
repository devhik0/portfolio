import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";

export default function Home() {
  return (
    <div className="bg-[#212529] text-gray-400 m-0 p-0 mt-0 pb-4">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* about */}
      <div id="about">
        <h1 className="text-center p-2">Welcome to my Portfolio !</h1>
        <div className="flex flex-col gap-y-4 p-4 justify-center items-center md:flex-row gap-x-8">
          <Image src={"/me.jpg"} alt="me" width={200} height={200} />
          <div className="w-full text-left sm:w-1/2">
            <span className="px-1 text-2xl leading-10">Hello, i am Hikmet</span> <br />
            <span className="px-1 text-2xl">I am a</span>{" "}
            <span className="px-1 text-2xl border-b-[1px] border-b-[#0dcaf0] bg-[#0dcaf0] transition duration-300 text-gray-800">
              Frontend Developer
            </span>
            <p className="text-2xl">
              from Turkey. I have a passion about designing <br /> and developing{" "}
              <span className="px-1 text-gray-800 bg-[#0dcaf0] transition duration-300 border-b-[1px] border-b-[#0dcaf0]">
                user interfaces
              </span>
              ,{" "}
              <span className="px-1 text-gray-800 bg-[#0dcaf0] transition duration-300 border-b-[1px] border-b-[#0dcaf0]">
                web apps
              </span>
              <br /> and{" "}
              <Link href="https://github.com/devhik0?tab=repositories" className="no-underline text-[#0dcaf0]">
                more
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* languages and skills */}
      <div className="w-full flex flex-col justify-center my-4 px-4 mx-auto">
        <h3 className="text-center">My Skills</h3>
        {/* languages */}
        <div className="m-2 max-w-full">
          <h4>Languages</h4>
          <div className="max-w-full  flex flex-row flex-wrap gap-x-2 gap-y-2 py-2">
            <Link href="https://www.w3schools.com/html/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                HTML
              </Button>
            </Link>
            <Link href="https://www.w3schools.com/css/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                CSS
              </Button>
            </Link>
            <Link href="https://www.w3schools.com/js/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Javascript
              </Button>
            </Link>
            <Link href="https://www.typescriptlang.org/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Typescript
              </Button>
            </Link>
          </div>
        </div>
        {/* libraries & fw */}
        <div className="m-2">
          <h4>Libraries and Frameworks</h4>
          <div className="max-w-full flex flex-row flex-wrap gap-x-2 gap-y-2 py-2">
            <Link href="https://getbootstrap.com/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Bootstrap
              </Button>
            </Link>
            <Link href="https://tailwindcss.com/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Tailwind
              </Button>
            </Link>
            <Link href="https://react.dev/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                React
              </Button>
            </Link>
            <Link href="https://redux.js.org/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Redux
              </Button>
            </Link>
            <Link href="https://nextjs.org/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Next.js
              </Button>
            </Link>
            <Link href="https://jestjs.io/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Jest
              </Button>
            </Link>
            <Link href="https://playwright.dev/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Playwright
              </Button>
            </Link>
          </div>
        </div>
        {/* tools & more */}
        <div className="m-2">
          <h4>Tools and more</h4>
          <div className="max-w-full flex flex-row flex-wrap gap-x-2 gap-y-2 py-2">
            <Link href="https://git-scm.com/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                Git
              </Button>
            </Link>
            <Link href="https://www.npmjs.com/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                npm
              </Button>
            </Link>
            <Link href="https://webpack.js.org/">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                webpack
              </Button>
            </Link>
            <Link href="https://www.json.org/json-en.html">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                JSON
              </Button>
            </Link>
            <Link href="https://www.ibm.com/topics/rest-apis">
              <Button style={{ borderRadius: 0 }} variant="outline-info">
                REST API
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* projects */}
      <div id="projects" className="w-full flex flex-col gap-x-4 p-2 mt-2 mx-auto justify-center items-center">
        <h3 className="mb-4">My Projects</h3>
        <CardGroup className="gap-x-6 px-2 flex flex-col border-r-0">
          <Card
            bg="dark"
            border="info"
            style={{ width: "20rem", marginBottom: "1rem", padding: "1rem", borderRadius: 0 }}
          >
            <Card.Img alt="dialer" variant="top" className="rounded-lg" src="/dialer.webp" />
            <Card.Body>
              <Card.Title>Dialer App</Card.Title>
              <Card.Text>Some dialer phone app with Next.js, Redux and Typescript.</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Next.js</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Redux</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Typescript</ListGroup.Item>
            </ListGroup>
            <Card.Body className="mt-2 flex flex-row gap-x-2 justify-center">
              <Card.Link href="https://github.com/devhik0/dialer">
                <Button style={{ borderRadius: 0 }} variant="outline-info">
                  Source
                </Button>
              </Card.Link>
              <Card.Link href="https://dialer-devhik0s-projects.vercel.app/son">
                <Button style={{ borderRadius: 0 }} variant="outline-info">
                  Project
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            bg="dark"
            border="info"
            style={{ width: "20rem", marginBottom: "1rem", padding: "1rem", borderRadius: 0 }}
          >
            <Card.Img alt="musix" variant="top" className="rounded-lg" src="/musix.webp" />
            <Card.Body>
              <Card.Title>Musix App</Card.Title>
              <Card.Text>Some musix phone app with React Native, Typescript and Tailwind.</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>React Native</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Tailwind</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Typescript</ListGroup.Item>
            </ListGroup>
            <Card.Body className="mt-2 flex flex-row gap-x-2 justify-center">
              <Card.Link href="https://github.com/devhik0/musixapp">
                <Button style={{ borderRadius: 0 }} variant="outline-info">
                  Source
                </Button>
              </Card.Link>
              <Card.Link href="https://github.com/devhik0/musixapp">
                <Button style={{ borderRadius: 0 }} variant="outline-info">
                  Project
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            bg="dark"
            border="info"
            style={{ width: "20rem", marginBottom: "1rem", padding: "1rem", borderRadius: 0 }}
          >
            <Card.Img alt="bookstore" variant="top" className="rounded-lg" src="/bookstore.webp" />
            <Card.Body>
              <Card.Title>Bookstore E-Commerce App</Card.Title>
              <Card.Text>Some bookstore app with Next.js, Typescript and Tailwind.</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Next.js</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Tailwind</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Typescript</ListGroup.Item>
            </ListGroup>
            <Card.Body className="mt-2 flex flex-row gap-x-2 justify-center">
              <Card.Link href="https://github.com/devhik0/bookstore-client">
                <Button style={{ borderRadius: 0 }} variant="outline-info">
                  Source
                </Button>
              </Card.Link>
              <Card.Link href="https://github.com/devhik0/bookstore-client">
                <Button style={{ borderRadius: 0 }} variant="outline-info">
                  Project
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            bg="dark"
            border="info"
            style={{ width: "20rem", marginBottom: "1rem", padding: "1rem", borderRadius: 0 }}
          >
            <Card.Img alt="crmsaas" variant="top" className="rounded-lg" src="/dashboard.webp" />
            <Card.Body>
              <Card.Title>CRM SaaS App</Card.Title>
              <Card.Text>Some CRM SaaS with Next.js, Typescript, Tailwind and Supabase</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Next.js</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Tailwind</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Typescript</ListGroup.Item>
              <ListGroup.Item style={{ background: "#212529", color: "#9ca3af" }}>Supabase</ListGroup.Item>
            </ListGroup>
            <Card.Body className="mt-2 flex flex-row gap-x-2 justify-center">
              <Card.Link href="https://github.com/devhik0/crm-saas">
                <Button style={{ borderRadius: 0 }} variant="outline-info">
                  Source
                </Button>
              </Card.Link>
              <Card.Link href="https://github.com/devhik0/crm-saas">
                <Button style={{ borderRadius: 0 }} variant="outline-info">
                  Project
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
        <Link href="https://github.com/devhik0?tab=repositories" className="no-underline text-gray-400">
          <span className="text-center text-xl">and more...</span>
        </Link>
      </div>

      {/* contact */}
      <div id="contact" className="w-full flex items-center justify-center my-4">
        <div className="flex flex-row gap-x-4 ">
          <Link href="https://github.com/devhik0" className="no-underline text-[#0dcaf0]">
            <Button style={{ borderRadius: 0 }} variant="outline-info">
              <span>Follow me on GitHub</span>
            </Button>
          </Link>
          <Link href="mailto:aydin96tr@gmail.com" className="no-underline text-[#0dcaf0]">
            <Button style={{ borderRadius: 0 }} variant="outline-info">
              <span>Write me an email</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
