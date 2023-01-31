export const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)} PLN ={" "}
                
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </>
        )}
    </p>
);