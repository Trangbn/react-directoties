export default function Input({textArea}) {
    return (
        <p>
            <label ></label>
            {textArea ? <textarea/> : <input />}
        </p>
    );
}