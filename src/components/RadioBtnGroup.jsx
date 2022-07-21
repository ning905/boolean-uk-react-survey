export default function RadioBtnGroup({ handleInput, color }) {
  return (
    <ul>
      <li>
        <input
          id="color-one"
          type="radio"
          name="color"
          value="1"
          checked={color === "1"}
          onChange={handleInput}
        />
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input
          id="color-two"
          type="radio"
          name="color"
          value="2"
          checked={color === "2"}
          onChange={handleInput}
        />
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input
          id="color-three"
          type="radio"
          name="color"
          value="3"
          checked={color === "3"}
          onChange={handleInput}
        />
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input
          id="color-four"
          type="radio"
          name="color"
          value="4"
          checked={color === "4"}
          onChange={handleInput}
        />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}
