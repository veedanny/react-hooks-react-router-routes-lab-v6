import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes";

const id = 1
    initialEntries: [`/movie/${id}`],

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders movie's title in an h1", async () => {
});

test("renders movie's time within a p tag", async () => {
  const p = await screen.findByText(/115/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders a span for each genre",  () => {
  render(<RouterProvider router={router} />);
  const genres = ["Action", "Adventure", "Fantasy"];
  genres.forEach(async (genre) =>{
    const span = await screen.findByText(genre);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  })
});

test("renders the <NavBar /> component", async () => {
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/1`]
  })
  render(
      <RouterProvider router={router}/>
  );
  expect(await screen.findByRole("navigation")).toBeInTheDocument();
});
