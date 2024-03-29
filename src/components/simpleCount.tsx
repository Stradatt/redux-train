import React, {FC, useCallback, useMemo, useState} from 'react';


const getList = () => [1, 2, 3]
const SimpleCount:FC = () => {
    console.log('parent')
    const [count, setCount] = useState<number>(0)

    const list = useMemo(() => getList(), [])

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, [])
    return (
        <div >
            <div>
                РОДИТЕЛЬСКИЙ КОМПОНЕНТ: {count}
            </div>
           <div>
               <ButtonCount increment={increment}/>
           </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <AnotherComponent list={list}/>
            </div>
        </div>
    );
};

const ButtonCount = React.memo(({increment}: any) => {
        console.log('two chilld')
  return (
    <button style={{margin: '5px'}} onClick={increment}>
        добавить
    </button>
  )

})


const AnotherComponent = React.memo(({list}: any) => {
    console.log('child')
    return (
        <div style={{margin: '5px', display: 'flex'}}>
            ДОЧЕРНИЙ КОМПОНЕНТ
            {
                list.map( (el: any) => (
                    <div key={el} style={{padding: '4px', margin: '3px', border: '1px solid black', width: 'fit-content'}}>
                        1
                    </div>
                ))
            }
        </div>
    )
})

export default SimpleCount;