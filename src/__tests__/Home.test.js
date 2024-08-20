import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter} from "react-router-dom";
import routes from "../routes.js";


test("renders 'Home Page' inside of an <h1 />", () => {
  const h1 = screen.queryByText(/Home Page/);
});

test("Displays a list of movie titles", async () => {}

test("Displays links for each associated movie", async () =>{
  render(<RouterProvider router={router}/>);
  const linkList = await screen.findAllByText(/View Info/);
  expect(linkList.length).toBeGreaterThan(2);
  expect(linkList[0].href).toBe("http://localhost/movie/1");
})

test("renders the <NavBar /> component", () => {
  const router = createMemoryRouter(routes)
  render(
      <RouterProvider router={router}/>
  );
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});