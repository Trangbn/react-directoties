export function MealItem({meal}) {

    return (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="Depictive image"/>
                <h3>{meal.name}</h3>
                <div className="meal-item-price">{meal.price}$</div>
                <p className="meal-item-description">{meal.description}</p>
                <button className="button meal-item-actions">Add to cart</button>
            </article>
        </div>
    );

}