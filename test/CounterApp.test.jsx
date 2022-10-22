import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Tests in <CounterApp />", () => {
    const value = 100;

    test("should be match with the snapshot", () => {
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    });

    test("should show the title in a span tag", () => {
        render(<CounterApp value={value} />);
        expect(parseInt(screen.getByText(value).innerHTML)).toBe(value);
    });

    test("should increment with the button +1", () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText("+1"));
        expect(screen.getByText("101")).toBeTruthy();
    });

    test("should decrement with the button -1", () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText("-1"));
        expect(screen.getByText("99")).toBeTruthy();
    });
    
    test("should reset with the button Reset", () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText("-1"));
        fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
        expect(screen.getByText("100")).toBeTruthy();
    })
});
