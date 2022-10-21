import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Tests in <FirstApp />", () => {
    // test("should be match with the snapshot", () => {
    //     const title = "Soy Goku";
        
    //     // Updates secreen object
    //     const { container } = render(<FirstApp title={ title } />);

    //     // Snapshot takes a snapshot of the current component 
    //     // and compares it with the previous one
    //     // If there is a difference, it will fail
    //     // This is useful to check if the component is rendering correctly
    //     // If the component changes every time, this is not useful
    //     expect(container).toMatchSnapshot();
    // });

    test("should show the title in a h1 tag", () => {
        const title = "I'm Goku";
        const subtitle = 24;
        const { container, getByText, getByTestId } = render(<FirstApp title={ title } subtitle={subtitle} />);

        // const h1 = container.querySelector("h1");
        

        expect(getByText(title).tagName).toBe("H1");
        expect(getByText(title)).toBeTruthy();
        
        expect(getByTestId("test-title").innerHTML).toContain(title);
        expect(getByTestId("test-title")).toBeTruthy();

        // expect(h1.innerHTML).toContain(title);
        // expect(h1.innerHTML).toBe(title);
    })

    test("should show the subtitle sended by props", () => {
        const title = "I'm Goku";
        const subtitle = 24
        
        const { getAllByText } = render(
            <FirstApp title={ title } subtitle={subtitle} />
        );

        expect(getAllByText(subtitle).length).toBe(2);
    });
});
