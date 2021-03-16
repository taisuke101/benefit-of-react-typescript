import { VFC } from 'react'

interface SampleProps {
    number: number; //必須項目
    string: string; //必須項目
    boolean?: boolean //必須ではない
}

const Sample: VFC<SampleProps> = (props) => {
    return (
        <div className="flex-column">
            {/* ↓props.でPropsに定義した項目が候補表示されることを確認してみて下さい */}
            <h2>プロップスの候補表示</h2>
            <div>number is {props.number}</div>
            <div>string is {props.string}</div>
            <div>boolean is {props.boolean}</div>
        </div>
    );
}
export default Sample;