using PlantService from './plant-service';

annotate PlantService.Plants with {
    ID           @title: 'ID';
    name         @title: 'Name';
    organization @title: 'Organization';
    house_number @title: 'House Number';
    street       @title: 'Street';
    post_code    @title: 'Post Code';
    city         @title: 'City';
    country      @title: 'Country';
    supplier     @title: 'Supplier';
}

annotate PlantService.Suppliers with {
    ID              @title: 'ID';
    name            @title: 'Supplier Name';
    industry_sector @title: 'Industry Sector';
    city            @title: 'Country';
    plant           @title: 'Plant';
}

annotate PlantService.Plants with @(UI: {
    HeaderInfo      : {
        TypeName      : 'Plant',
        TypeNamePlural: 'Plants',
        Title         : {
            $Type: 'UI.DataField',
            Value: name
        }
    },
    SelectionFields : [name],
    LineItem        : [
        {Value: name},
        {Value: organization},
        {Value: city},
        {Value: country},


    ],
    Facets          : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Main',
            Target: '@UI.FieldGroup#Main'
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Supplier',
            Target: 'supplier/@UI.FieldGroup#Main'
        }
    ],
    FieldGroup #Main: {Data: [
        {Value: ID},
        {Value: name},
        {Value: organization},
        {Value: house_number},
        {Value: street},
        {Value: post_code},
        {Value: city},
        {Value: country},

    ]}
}, ) {

};

annotate PlantService.Suppliers with @(UI: {
    Facets          : [{
        $Type : 'UI.ReferenceFacet',
        Label : 'Main',
        Target: '@UI.FieldGroup#Main'
    }],
    FieldGroup #Main: {Data: [
        {Value: ID},
        {Value: name},
        {Value: industry_sector},
        {Value: city},
        {Value: country},
    ]}
}, ) {

};
