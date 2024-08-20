import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter, MemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes.js";



test('renders the Home component on route "/"', () => {
  render(
);
});

test('renders the Actors component on route "/actors"', () => {
        initialEntries: ['/actors']
    })
  render(
);

test('renders the Directors component on route "/directors"', () => {
        initialEntries: ['/directors']
    })
  render(
  );

test('renders the Movie component on route "/movie/:id"', async () => {
    const id = 1
        initialEntries: [`/movie/${id}`]
    })
  render(
    <RouterProvider router={router}/>
);
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () =>{
  const router = createMemoryRouter(routes, {
      initialEntries: ["/bad-route"]
  })
  render(
      <RouterProvider router={router} />
  )
  expect(screen.getByText(/Oops! Looks like something went wrong./)).toBeInTheDocument()
})
