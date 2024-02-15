import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HandSelection from "./HandSelection";
import { FaRegHandRock } from "react-icons/fa";
import userEvent from "@testing-library/user-event";
import { OptionsProviders } from "../context/optionsContext";

vi.mock("./HandSelection.module.css", () => {
  return {
    default: {
      choiceBtn: "choiceBtn",
      activeChoice: "activeChoice",
    },
  };
});

describe("HandSelection", () => {
  it("should render with pass props", async () => {
    let handSelection = render(
      <HandSelection
        name="Rock"
        icon={<FaRegHandRock data-testid="test-icons" />}
        handChoiceIndex={2}
      />
    );

    let hand = screen.getByText(/rock/i);
    let icon = screen.getByTestId("test-icons");

    expect(hand).toBeVisible();
    expect(icon).toBeVisible();
    expect(handSelection).toBeTruthy();
  });

  it("should have active class", async () => {
    let user = userEvent.setup();

    render(
      <OptionsProviders>
        <HandSelection
          name="Rock"
          icon={<FaRegHandRock data-testid="test-icons" />}
          handChoiceIndex={2}
        />
      </OptionsProviders>
    );

    let hand = screen.getByText(/rock/i);

    await user.click(hand);

    expect(hand).toHaveClass("activeChoice");
  });
});
