const category = [
    {
        name: "Category 1",
        children: [
            {
                name: "Category 1.1",
                children: [
                    {
                        name: "Category 1.1.1",
                        children: [
                            {
                                name: "Category 1.1.1.1",
                                children: null
                            }
                        ]
                    },
                    {
                        name: "Category 1.1.2",
                        children: null
                    }
                ]
            },
            {
                name: "Category 1.2",
                children: [
                    {
                        name: "Category 1.2.1",
                        children: null
                    },
                    {
                        name: "Category 1.2.2",
                        children: [
                            {
                                name: "Category 1.2.2.1",
                                children: [
                                    {
                                        name: "Category 1.2.2.1.1",
                                        children: null
                                    }
                                ]        
                            },
                            {
                                name: "Category 1.2.2.2",
                                children: [
                                    {
                                        name: "Category 1.2.2.2.1",
                                        children: null
                                    }
                                ]        
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Category 2",
        children: null
    }
];

const printCategories = (categories, indent = '') => {
    categories.forEach(category => {
        console.log(indent + category.name); // Print the current category with indentation
        if (category.children) {
            printCategories(category.children, indent + '    '); // Recursive call with increased indentation
        }
    });
};

// Call the function with the category array
printCategories(category);

function printCategories(categories) {
    const stack = categories.map(category => ({ category, indent: '' })); // Initialize stack with top-level categories

    while (stack.length > 0) {
        const { category, indent } = stack.pop(); // Get the current category and its indentation level
        console.log(indent + category.name); // Print the category name with indentation

        // If the category has children, add them to the stack with increased indentation
        if (category.children) {
            for (let i = category.children.length - 1; i >= 0; i--) {
                stack.push({ category: category.children[i], indent: indent + '    ' });
            }
        }
    }
}

// Call the function with the category array
printCategories(category);