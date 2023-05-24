import ReactSlider from 'react-slider';

const RecipeSlider = ({instructions, name, description, photo}) => {
    return (
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={0}
            max={instructions.length}
            value={1}
            renderTrack={(props, state) => {
                const currentSlide = state.valueNow;
                if (currentSlide === 0) {
                    return (
                        <div className="custom-track">
                            <div className="recipe-info">
                                <img src={photo} alt={name}/>
                                <h2>{name}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="custom-track">
                            <div className="recipe-step">{instructions[currentSlide - 1]}</div>
                        </div>
                    );
                }
            }}
        />
    );
};

export default RecipeSlider;
