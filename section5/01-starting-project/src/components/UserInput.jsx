
export default function UserInput({investments, handleChange}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input type="number"
                           value={investments.initialInvestment}
                           onChange={(event) => handleChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" onChange={(event) => handleChange('annualInvestment', event.target.value)}
                           value={investments.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" onChange={(event) => handleChange('expectedReturn', event.target.value)}
                           value={investments.expectedReturn}
                    />
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" onChange={(event) => handleChange('duration', event.target.value)}
                           value={investments.duration}
                    />
                </p>
            </div>
        </section>
    );
}