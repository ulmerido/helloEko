const enumLike = {
    like: 1,
    neutral: 0,
    unlike: -1,
}

const eColors = {
    neutral: '#aaa',
    like: '#0084ff',
    unlike: '#ff2b1c',
}

class TestVideoComponent {
    constructor() {
        this.btn_Like = { style: { color: "" } }
        this.btn_Unlike = { style: { color: "" } }
        this._updateLikeButtonsColor = this._updateLikeButtonsColor.bind(this);
    }

    ssToHHMMSS(secs) {
        let sec_num = parseInt(secs, 10)
        let hours = Math.floor(sec_num / 3600)
        let minutes = Math.floor(sec_num / 60) % 60
        let seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }

    _updateLikeButtonsColor(i_LikeType) {
        switch (i_LikeType) {
            case enumLike.like:
                this.btn_Like.style.color = eColors.like;
                this.btn_Unlike.style.color = eColors.neutral;
                break;
            case enumLike.neutral:
                this.btn_Like.style.color = eColors.like;
                this.btn_Unlike.style.color = eColors.neutral;
                break;
            case enumLike.unlike:
                this.btn_Like.style.color = eColors.neutral;
                this.btn_Unlike.style.color = eColors.unlike;
                break;
        }
    }
}

const vc = new TestVideoComponent();

module.exports = {
    vc: vc,
    eColors: eColors,
    enumLike: enumLike,
};