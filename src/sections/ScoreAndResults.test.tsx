import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { OptionsProviders, useOptions } from "../context/optionsContext";
import ScoreAndResults from "./ScoreAndResults";
import ChooseAndPlay from "./ChooseAndPlay";
import { randomNumber } from "../utils/randomNumber";

vi.mock("../utils/randomNumber", () => ({
  randomNumber: () => 0,
}));

vi.mock("./ScoreAndResults.module.css", () => {
  return {
    default: {
      scoreCtn: "scoreCtn",
      score: "score",
      results: "results",
      playerHand: "playerHand",
      midCol: "midCol",
      computerHand: "computerHand",
      playerShake: "playerShake",
      computerShake: "computerShake",
      winnerAnimation: "winnerAnimation",
    },
  };
});

describe("ScoreAndResults", () => {
  it("should render", () => {
    render(
      <OptionsProviders>
        <ScoreAndResults />
      </OptionsProviders>
    );
  });

  it("it should display 2 seconds on screen after when wait 1 second ", () => {
    vi.useFakeTimers();
    render(
      <OptionsProviders>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProviders>
    );

    let hand = screen.getByText(/paper/i);
    let play = screen.getByText("Play");

    expect(hand).toBeVisible();
    expect(play).toBeVisible();

    fireEvent.click(hand);
    fireEvent.click(play);
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    screen.debug();

    expect(screen.getByTestId("timer")).toHaveTextContent("2");
  });

  it("it should display the correct winner", () => {
    vi.useFakeTimers();
    render(
      <OptionsProviders>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProviders>
    );

    let hand = screen.getByText(/paper/i);
    let play = screen.getByText("Play");

    expect(hand).toBeVisible();
    expect(play).toBeVisible();

    fireEvent.click(hand);
    fireEvent.click(play);
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.getByText(/Player wins/)).toBeVisible();
    expect(screen.getByText(/Player: 1/)).toBeVisible();
    expect(screen.getByText(/Computer: 0/)).toBeVisible();

    expect(screen.getAllByTestId(/rock/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/paper/i)[0]).toBeVisible();
    expect(screen.getAllByTestId(/scissors/i)[0]).toBeVisible();
  });

  it("it should display the player and computer hand shake when playing", () => {
    vi.useFakeTimers();
    render(
      <OptionsProviders>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProviders>
    );

    let playerShake = screen.queryByTestId("playerShake");
    let computerShake = screen.queryByTestId("computerShake");

    expect(playerShake).not.toBeTruthy();
    expect(computerShake).not.toBeTruthy();

    let hand = screen.getByText(/paper/i);
    let play = screen.getByText("Play");

    fireEvent.click(hand);
    fireEvent.click(play);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    let playerShake2 = screen.queryByTestId("playerShake");
    let computerShake2 = screen.queryByTestId("computerShake");

    expect(playerShake2).toBeTruthy();
    expect(computerShake2).toBeTruthy();
  });

  it("it should display the winning hand shake when playing", () => {
    vi.useFakeTimers();
    render(
      <OptionsProviders>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProviders>
    );

    let hand = screen.getByText(/paper/i);
    let play = screen.getByText("Play");

    fireEvent.click(hand);
    fireEvent.click(play);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.queryByTestId("playerResult")).toHaveClass("winnerAnimation");
  });

  it("it should reset the previous winner message results", () => {
    vi.useFakeTimers();
    render(
      <OptionsProviders>
        <ScoreAndResults />
        <ChooseAndPlay />
      </OptionsProviders>
    );

    let hand = screen.getByText(/scissors/i);
    let play = screen.getByText("Play");

    fireEvent.click(hand);
    fireEvent.click(play);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    screen.debug();

    expect(screen.queryByTestId("computerResult")).toHaveClass(
      "winnerAnimation"
    );
    expect(screen.queryByText("Computer wins")).toBeTruthy();
    expect(screen.queryAllByText(/Computer wins/i)).toHaveLength(2);
  });
});
