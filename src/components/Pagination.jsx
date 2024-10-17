import {
    ArrowLeftCircleIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { Button, IconButton } from "@material-tailwind/react";

const PaginationCard = (props) => {
    /*************  ✨ Codeium Command ⭐  *************/
    /******  f3ff1436-692c-4f6d-88b8-e488a8506f13  *******/ const {
        currentPage,
        setCurrentPage,
        totalPages,
    } = props;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    console.log(totalPages);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                className="flex gap-2 rounded-lg items-center bg-primary"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                <p>Prev</p>
            </Button>
            <div className="flex items-center gap-2">
                {[...Array(totalPages).keys()].map((page) => (
                    <IconButton
                        className={
                            currentPage === page + 1 ? "bg-primary" : "bg-gray-400"
                        }
                        key={page + 1}
                        active={page + 1 === currentPage}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        {page + 1}
                    </IconButton>
                ))}
            </div>

            <Button

                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 rounded-lg bg-primary"
            >
                <p>Next</p>
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default PaginationCard;
