import { VFC, FormEvent, useState } from 'react'

const SampleForm: VFC<{}> = () => {
    const [variables, setvariables] = useState({
        username: '',
        password: ''
    })

    // 「FormEvent」の型をつけると、
    //型定義ファイルにあるメソッド等を候補として表示してくれるようになる
    const submitSampleForm = (e: FormEvent) => {
        e.preventDefault();

        console.log(variables);
    }

    return (
        <div className='flex-column'>
            <h2>コード補完</h2>
            <form onSubmit={submitSampleForm} className='flex-column'>
                {/* ↓変数eの型をTypescriptが型推論してくれている */}
                <input
                    placeholder='username'
                    onChange={e => setvariables({...variables, username: e.target.value })}
                />
                <input 
                    placeholder='password'
                    onChange={e => setvariables({...variables, password: e.target.value })}
                />
                <button type="submit">送信</button>
            </form>
        </div>
    );
}
export default SampleForm;