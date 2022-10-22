import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Tests in <FirstApp />", () => {
    const title = "I'm Goku";
    const subtitle = 24;


    test("should be match with the snapshot", () => {
        const { container } = render(<FirstApp title={ title } subtitle={subtitle} />);
        expect(container).toMatchSnapshot();
    });


    test("should show the title in a h1 tag", () => {
        render(<FirstApp title={ title } subtitle={subtitle} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })


    test("should show the subtitle sended by props", () => {
        render(<FirstApp title={ title } subtitle={subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});
