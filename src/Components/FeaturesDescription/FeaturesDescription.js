import "./FeaturesDescription.css";
    
const FeaturesDescription = ({Icon, Text, Title, Items, Image}) => {

    const FeaturesItems = () => {
        // if (Items.length === 0) {
        //     return;
        // }

        return(
            <>
            {
                Items.map((str, num) => {
                    return <span key={num} className="class_features_item_description_items"><i className="fas fa-check"/>{str}</span>
                })
            }
            </>
        );
    }

    return(
        <div className="class_features_item_description_container">
            <div className="class_features_item_description_title">
                <i className={Icon}></i>
                <span>{Title}</span>
            </div>

            <div className="class_features_item_description_information_container">
                <div className="class_features_item_description_information">
                    <div className="class_features_item_description_image">
                        <img src={Image}/>
                    </div>

                    <div className="class_features_item_description_text">
                        <span className="class_features_item_description_text_title">
                            Información
                        </span>

                        <div style={{borderColor: "gray"}} className="class_features_item_description_text_border"></div>

                        <div className="class_features_item_description_text_body">
                            {Text}
                        </div> 

                        <div className="class_features_item_description_items_container">
                            <FeaturesItems/>
                        </div>

                        <div style={{borderColor: "#e7e7e7"}} className="class_features_item_description_text_border"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesDescription