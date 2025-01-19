import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {
    const amountInputId = useId()
    return (
        <div className={`bg-white/20 p-3 rounded-lg text-sm flex my-3`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-white mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="border-2 border-gray-300 rounded-md w-full bg-transparent py-1.5 px-2 text-white"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white mb-2 w-full">Currency Type</p>
                <select
                    className="border-2 rounded-lg px-1 py-1 bg-transparent text-white cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option className='bg-black/100' key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;