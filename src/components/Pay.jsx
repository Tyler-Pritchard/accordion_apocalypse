import StripeCheckout from 'react-stripe-checkout';

const Pay = () => {
    return (
        <div 
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <button 
                style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5
                }} >
                    Pay
                </button>
        </div>
    )
}

export default Pay;