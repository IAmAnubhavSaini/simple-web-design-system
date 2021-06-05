import React, {useState} from 'react';
import styled from 'styled-components';

const Grid2 = styled.div`
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: 1fr auto;
`;

export default function Playground() {
    const [fontSizeUnit, setFontSizeUnit] = React.useState('px');
    const [fontSize, setFontSize] = React.useState(`16`);
    const [fontWeight, setFontWeight] = React.useState(400);
    const [fontStretch, setFontStretch] = React.useState('normal');
    const [fontStyle, setFontStyle] = React.useState('normal');
    const [color, setColor] = useState("black");
    const [backgroundColor, setBackgroundColor] = useState('white');

    const [border, setBorder] = useState('thin solid red');
    const [borderRadiusUnit, setBorderRadiusUnit] = useState('px');
    const [borderRadius, setBorderRadius] = useState('4');

    const [heightUnit, setHeightUnit] = useState('px');
    const [height, setHeight] = useState(400);
    const [widthUnit, setWidthUnit] = useState('px');
    const [width, setWidth] = useState(400);

    const [paddingUnit, setPaddingUnit] = useState('em');
    const [padding, setPadding] = useState('1');
    const [marginUnit, setMarginUnit] = useState('em');
    const [margin, setMargin] = useState('1');

    return (
        <Grid2>
            <div className={"controls"}>
                <h2>Controls</h2>
                <div>
                    <label>font-size: ({fontSize}) <br/>
                        <input value={fontSize} type="range"
                               onChange={(e: any) => setFontSize(e.target.value)}
                               step={.1}
                        />
                    </label>
                    <label>unit: <br/>
                        <select value={fontSizeUnit}
                                onChange={(e: any) => setFontSizeUnit(e.target.value)}
                                placeholder={"px|em|pt|in|cm|mm|rem"}>
                            <option value="px">px</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="in">in</option>
                            <option value="cm">cm</option>
                            <option value="mm">mm</option>
                            <option value="pt">pt</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>font-weight: ({fontWeight}) <br/>
                        <input min={100} max={900} value={fontWeight} type="range"
                               onChange={(e: any) => setFontWeight(e.target.value)}
                               step={100}
                        />
                    </label>
                </div>
                <div>
                    <label>font-stretch: <br/>
                        <select value={fontStretch}
                                onChange={(e: any) => setFontStretch(e.target.value)}>
                            <option value="normal">normal</option>
                            <option value="ultra-condensed">ultra-condensed</option>
                            <option value="extra-condensed">extra-condensed</option>
                            <option value="condensed">condensed</option>
                            <option value="semi-condensed">semi-condensed</option>
                            <option value="semi-expanded">semi-expanded</option>
                            <option value="expanded">expanded</option>
                            <option value="extra-expanded">extra-expanded</option>
                            <option value="ultra-expanded">ultra-expanded</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>font-style: <br/>
                        <select value={fontStyle}
                                onChange={(e: any) => setFontStyle(e.target.value)}>
                            <option value="normal">normal</option>
                            <option value="italic">italic</option>
                            <option value="oblique">oblique</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>color: <br/>
                        <input type="color" value={color}
                               onChange={(e: any) => setColor(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>background-color: <br/>
                        <input type="color" value={backgroundColor}
                               onChange={(e: any) => setBackgroundColor(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>border: <br/>
                        <input type="text" value={border}
                               onChange={(e: any) => setBorder(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>border-radius: ({borderRadius}) <br/>
                        <input value={borderRadius} type="range"
                               onChange={(e: any) => setBorderRadius(e.target.value)}
                               step={1} max={Math.max(height, width)} min={1}
                        />
                    </label>
                    <label>unit: <br/>
                        <select value={borderRadiusUnit}
                                onChange={(e: any) => setBorderRadiusUnit(e.target.value)}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="in">in</option>
                            <option value="cm">cm</option>
                            <option value="mm">mm</option>
                            <option value="pt">pt</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>height: ({height}) <br/>
                        <input value={height} type="range"
                               onChange={(e: any) => setHeight(e.target.value)}
                               step={1} max={1000} min={1}
                        /> <br/>
                        <input type={"number"} value={height} onChange={(e: any) => setHeight(e.target.value)}/>
                    </label>
                    <label>unit: <br/>
                        <select value={heightUnit}
                                onChange={(e: any) => setHeightUnit(e.target.value)}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="in">in</option>
                            <option value="cm">cm</option>
                            <option value="mm">mm</option>
                            <option value="pt">pt</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>width: ({width}) <br/>
                        <input value={width} type="range"
                               onChange={(e: any) => setWidth(e.target.value)}
                               step={1} max={1000} min={1}
                        /> <br/>
                        <input type={"number"} value={width} onChange={(e: any) => setWidth(e.target.value)}/>
                    </label>
                    <label>unit: <br/>
                        <select value={widthUnit}
                                onChange={(e: any) => setWidthUnit(e.target.value)}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="in">in</option>
                            <option value="cm">cm</option>
                            <option value="mm">mm</option>
                            <option value="pt">pt</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>padding: ({padding}) <br/>
                        <input value={padding} type="range"
                               onChange={(e: any) => setPadding(e.target.value)}
                               step={.1}
                        />
                    </label>
                    <label>unit: <br/>
                        <select value={paddingUnit}
                                onChange={(e: any) => setPaddingUnit(e.target.value)}>
                            <option value="em">em</option>
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="in">in</option>
                            <option value="cm">cm</option>
                            <option value="mm">mm</option>
                            <option value="pt">pt</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>margin: ({margin}) <br/>
                        <input value={margin} type="range"
                               onChange={(e: any) => setMargin(e.target.value)}
                               step={.1}
                        />
                    </label>
                    <label>unit: <br/>
                        <select value={marginUnit}
                                onChange={(e: any) => setMarginUnit(e.target.value)}>
                            <option value="em">em</option>
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="in">in</option>
                            <option value="cm">cm</option>
                            <option value="mm">mm</option>
                            <option value="pt">pt</option>
                        </select>
                    </label>
                </div>

            </div>
            <div className={"playground"}>
                <div className={"text"}>
                    <div contentEditable className={"editable"}
                         style={{
                             fontSize: `${fontSize}${fontSizeUnit}`,
                             fontWeight: fontWeight,
                             fontStretch: `${fontStretch}`,
                             fontStyle: `${fontStyle}`,
                             color: color,
                             backgroundColor: backgroundColor,
                             border: border,
                             borderRadius: `${borderRadius}${borderRadiusUnit}`,
                             height: `${height}${heightUnit}`,
                             width: `${width}${widthUnit}`,
                             padding: `${padding}${paddingUnit}`,
                             margin: `${margin}${marginUnit}`,
                         }}>

                        font-size: {fontSize}{fontSizeUnit};<br/>
                        font-weight: {fontWeight};<br/>
                        font-stretch: {fontStretch};<br/>
                        font-style: {fontStyle};<br/>
                        color: {color};<br/>
                        background-color: {backgroundColor};<br/>
                        border: {border};<br/>
                        border-radius: {borderRadius}{borderRadiusUnit};<br/>
                        height: {height}{heightUnit};<br/>
                        width: {width}{widthUnit};<br/>
                        padding: {padding}{paddingUnit};<br/>
                        margin: {margin}{marginUnit};<br/>

                    </div>
                </div>
            </div>
        </Grid2>
    );
}
