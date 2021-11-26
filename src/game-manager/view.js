import { combineElement, createElement } from "../utils.js";

function getGameHintText(ball, strike) {
    if (ball === 0 && strike === 0) return "낫싱";

    const textJoinArray = [];
    if (ball > 0) textJoinArray.push(`${ball}볼`);
    if (strike > 0) textJoinArray.push(`${strike}스트라이크`);

    return textJoinArray.join(" ");
}

export default class gameRuleView {
    constructor($resultWrap) {
        this.$result = $resultWrap;

        this.init();
    }

    init() {
        this.setVisible(false);
    }

    setVisible(isVisible) {
        if (isVisible === true) this.$result.style.display = "block";
        else if (isVisible === false) this.$result.style.display = "none";
    }

    renderGameHint(gameResult) {
        this.$result.innerText = getGameHintText(gameResult.ball, gameResult.strike);
        this.setVisible(true);
    }

    renderGameRetry() {
        const $correctText = createElement("H4", "🎉정답을 맞추셨습니다!🎉");

        const $retryWrap = createElement("DIV", "게임을 새로 시작하시겠습니까? ");
        const $retryButton = createElement("BUTTON", "재시작");

        $retryButton.id = "game-restart-button";
        $retryWrap.append($retryButton);

        this.$result.innerText = "";
        this.$result.append(combineElement([$correctText, $retryWrap]));
        this.setVisible(true);
    }
}
