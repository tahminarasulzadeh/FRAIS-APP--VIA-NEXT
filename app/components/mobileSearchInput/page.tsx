
'use client'

import { useEffect, useRef, useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";


interface Product {
    _id: number;
    name: string;
    image: string;
}

interface MobileMenuProps {
    click: () => void; // The `click` prop is a function with no arguments and no return value
}

const MobileSearchInput: React.FC<MobileMenuProps> = ({ click }) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        if (!searchTerm) return [];
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, products]);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setSearchTerm(""); // Clear the input when clicking outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div  ref={containerRef} className="flex flex-col items-center xl:py-2">
    <div className="search-bar flex items-center xl:py-2 w-full ">
        <CiSearch className="mr-[-20px] text-black z-10 text-[18px]" />
        <input
            type="text"
            placeholder="Search"
            className="border-b-black bg-transparent px-7 py-1 border-b-[1px] outline-black xl:placeholder:text-gray-500 placeholder:text-black w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
    {/* Display filtered products */}
    <div className="relative mt-1 w-full ">
        {filteredProducts.length > 0 && (
            <ul className="bg-white flex flex-col absolute left-0 top-full right-0 z-50 h-[150px] overflow-y-auto shadow-md rounded-lg ">
                {filteredProducts.map((product) => (
                    <Link
                        key={product._id}
                        href={`/products/${product._id}`}
                        className="py-2 px-4 border-b last:border-b-0 hover:bg-gray-100 flex items-center gap-4"
                        onClick={click}
                    >
                        <img
                            src={`http://localhost:5001${product.image}`}
                            alt={product.name}
                            className="w-[40px] h-[30px] object-cover"
                        />
                        <p className="text-sm text-black">{product.name}</p>
                    </Link>
                ))}
            </ul>
        )}
    </div>
</div>

    );
}
export default MobileSearchInput