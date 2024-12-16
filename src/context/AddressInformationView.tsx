
interface AddressInfoViewProps {
    setShippingInfo: (shippingInfo:any) => void;
    shippingInfo: any;
    setActiveTab: (activeTab: string) => void;
    
}
export const AddressInfoView = () => {
    return (
        <div>
            <h1>Address Information</h1>
            <p>Address: 1234 Elm Street</p>
            <p>City: Springfield</p>
            <p>State: IL</p>
            <p>Zip: 62701</p>
        </div>
    )
}