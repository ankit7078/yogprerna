"use client";
import React, { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
// import Breadcrumb from '@/components/breadcrumbs/breadcrumbs';
// import { Search } from 'lucide-react';
// import Link from 'next/link';
// import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

// --- Mock Data ---
const mainArticlesData = [
    {
        id: 1,
        title: 'New York mayoral polls: When is voting and where Mamdani, competitors stand',
        summary: 'Early voting has begun in New York City\'s mayoral race, with Zohran Mamdani leading against Andrew Cuomo and Curtis Sliwa; the mayoral elections will decide if the city gets its first...',
        fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        timestamp: 'Updated On : 03 Nov 2025 | 4:07 PM IST',
        imageUrl: '/img/newandupdate/new-1.jpg'
    },
    {
        id: 2,
        title: 'Japan to invest $300 mn in Pakistan\'s copper mine amid supply crunch',
        summary: 'Situated in Pakistan\'s Balochistan province, the Reko Diq copper-gold mine is poised to become one of the world\'s five largest copper reserves, drawing Japanese financing and...',
        fullText: 'Situated in Pakistan\'s Balochistan province, the Reko Diq copper-gold mine is poised to become one of the world\'s five largest copper reserves, drawing Japanese financing and... Integer posuere erat a ante. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.',
        timestamp: 'Updated On : 03 Nov 2025 | 2:56 PM IST',
        imageUrl: '/img/newandupdate/new-2.jpg'
    },
    {
        id: 3,
        title: 'Train derails in northwest England with no immediate reports of injuries',
        summary: 'Railway operator Avanti West Coast said the train came off the rails between Penrith and Oxenholme stations in the mountainous Lake District region.',
        fullText: 'Railway operator Avanti West Coast said the train came off the rails between Penrith and Oxenholme stations in the mountainous Lake District region. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        timestamp: 'Updated On : 03 Nov 2025 | 2:28 PM IST',
        imageUrl: '/img/newandupdate/new-3.jpg'
    },
    {
        id: 4,
        title: 'Another Article Headline for Page 2',
        summary: 'This is a summary for an article that will appear on the second page to demonstrate pagination functionality.',
        timestamp: 'Updated On : 03 Nov 2025 | 1:00 PM IST',
        imageUrl: '/img/newandupdate/new-2.jpg',
        fullText: 'This is the full text for Another Article Headline. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 5,
        title: 'More News: A Look at Page 2 Content',
        summary: 'Exploring more content on the subsequent page of the world news section.',
        timestamp: 'Updated On : 03 Nov 2025 | 12:30 PM IST',
        imageUrl: '/img/newandupdate/new-1.jpg',
        fullText: 'This is the full text for More News. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 6,
        title: 'Page 2: Final Article',
        summary: 'This is the last article for the second page.',
        timestamp: 'Updated On : 03 Nov 2025 | 11:00 AM IST',
        imageUrl: '/img/newandupdate/new-1.jpg',
        fullText: 'This is the full text for Page 2: Final Article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 7,
        title: 'Page 3 Article: Going Deeper',
        summary: 'This article would be on the third page.',
        timestamp: 'Updated On : 03 Nov 2025 | 10:00 AM IST',
        imageUrl: '/img/newandupdate/new-3.jpg',
        fullText: 'This is the full text for Page 3 Article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
];
const sidebarNews = [
    {
        id: 1,
        title: 'New York mayoral polls: When is voting and where Mamdani, competitors stand',
        imageUrl: '/img/newandupdate/new-1.jpg'
    },
    {
        id: 2,
        title: 'Japan to invest $300 mn in Pakistan\'s copper mine amid supply',
        imageUrl: '/img/newandupdate/new-1.jpg'
    },
    {
        id: 3,
        title: 'Train derails in northwest England with no immediate reports of injuries',
        imageUrl: '/img/newandupdate/new-1.jpg'
    },
];
const popularNews = [
    {
        id: 1,
        title: 'At least 10 killed, 260 injured after 6.3 magnitude quake jolts',
        imageUrl: '/img/newandupdate/new-1.jpg'
    },
    {
        id: 2,
        title: 'Another popular article headline',
        imageUrl: '/img/newandupdate/new-1.jpg'
    },
]

// --- Placeholder Components ---

// Placeholder Search Icon
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--text-hover-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

// Placeholder Double Arrow Icon
const DoubleArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
);

// Placeholder Breadcrumb Component
const Breadcrumb = ({ items }) => (
    <nav className="text-sm text-[var(--primary-text)]" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
            {items.map((item, index) => (
                <li key={index} className="flex items-center">
                    {item.href ? (
                        <a href={item.href} className="text-[var(--primary-text)]">{item.label}</a>
                    ) : (
                        <span className="text-gray-800">{item.label}</span>
                    )}
                    {index < items.length - 1 && (
                        <span className="mx-2">/</span>
                    )}
                </li>
            ))}
        </ol>
    </nav>
);


// --- Components ---

//  Search Input component
const SearchInput = ({ searchQuery, onSearchChange }) => (
    <div className="relative mb-4 w-full max-w-md justify-center items-center">
        <input
            type="text"
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Search articles..."
            className="w-full px-1 py-2 pl-8 paragraph rounded-custom border border-[var(--primary-border)] "
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* <Search className="h-4 w-4 text-[var(--text-hover-color)]" /> */}
            <SearchIcon />
        </div>
    </div>
);

//  Main Article component for the left column
const MainArticle = ({ article, onClick }) => (
    <article className="py-6 border-b border-[var(--primary-border)]">
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
                <h2 className="heading font-semibold mb-2 leading-tight">
                    <a
                        href={`/news/${article.id}`}
                        className="hover:text-[var(--text-hover-color)] cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            onClick(article.id);
                        }}
                    >
                        {article.title}
                    </a>
                </h2>
                <p className='mb-2'>
                    {article.summary}
                </p>
                <p className='font-semibold'>{article.timestamp}</p>
            </div>
            {article.imageUrl && (
                <div className="w-full sm:w-[210px] flex-shrink-0  border border-[var(--primary-border)] p-1 rounded-custom">
                    <img
                        src={article.imageUrl}
                        alt="Article thumbnail"
                        className="w-full h-auto object-cover rounded-md"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/210x140/e2e8f0/64748b?text=Image+Error'; }}
                    />
                </div>
            )}
        </div>
    </article>
);

//  Sidebar Article component (for Latest & Popular)
const SidebarArticle = ({ article }) => (
    <article className="flex gap-3 py-4 border-b border-[var(--primary-border)] items-center last:border-b-0">
        <div className="flex-1">
            <h3 className="text-base heading-sm font-semibold">
                <a href="#">{article.title}</a>
            </h3>
        </div>
        {article.imageUrl && (
            <div className="w-[80px] flex-shrink-0">
                <img
                    src={article.imageUrl}
                    alt="Article thumbnail"
                    className="w-full h-auto object-cover rounded"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x60/e2e8f0/64748b?text=Error'; }}
                />
            </div>
        )}
    </article>
);

// Sidebar section with tabs
const SidebarTabs = ({ title, tabs, moreLink = false, articles }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="mb-8">
            {/* Header */}
            <div className="flex justify-between items-center border-b-1 border-[var(--primary-border)] mb-4">
                <h2 className="heading font-bold relative">
                    {title}
                    <span className="absolute -bottom-[2px] left-0 h-0.5 w-1/4 bg-[var(--text-hover-color)]"></span>
                </h2>
                {moreLink && (
                    <a href="#" className="paragraph hover:text-[var(--text-hover-color)] flex items-center gap-1">
                        more
                        {/* <MdKeyboardDoubleArrowRight /> */}
                        <DoubleArrowIcon />
                    </a>
                )}
            </div>

            {/* Tab Content */}
            <div className="mt-4">

                {articles.map((article) => (
                    <SidebarArticle key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};

//  Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex justify-center items-center gap-2 mt-8" aria-label="Pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md border border-[var(--primary-border)] bg-[var(--secondary-bg)] hover:bg-[var(--primary-bg)] cursor-pointer disabled:opacity-50"
            >
                Prev
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded-md cursor-pointer ${currentPage === page
                        ? 'bg-[var(--text-hover-color)] text-[var(--secondary-text)]'
                        : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md border border-[var(--primary-border)] bg-[var(--secondary-bg)] hover:bg-[var(--primary-bg)] cursor-pointer disabled:opacity-50"
            >
                Next
            </button>
        </nav>
    );
};

// --- Article Detail Page Component ---
const ArticleDetailPage = ({ article, onBack }) => (
    <article className='pb-6'>
        <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-[var(--primary-text)] hover:text-[var(--text-hover-color)] cursor-pointer  mb-4"
        >
            <IoMdArrowBack />
            Back to World News
        </button>

        <h1 className="heading-lg font-bold mb-4 leading-tight">
            {article.title}
        </h1>
        <p className="font-semibold mb-6">{article.timestamp}</p>

        {article.imageUrl && (
            <div className="w-full  rounded-custom mb-6">
                <img
                    src={article.imageUrl} // You might want a larger image URL here
                    alt="Article main image"
                    className="aspect-[3/2] object-cover rounded-md"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/64748b?text=Image+Error'; }}
                />
            </div>
        )}

        <div className="paragraph leading-relaxed space-y-2">
            <h2 className="sub-heading font-semibold">{article.summary}</h2>
            <p>{article.fullText || "Full article text would go here. Lorem ipsum dolor sit amet..."}</p>
        </div>
    </article>
);


//  Main App Component
export default function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedArticleId, setSelectedArticleId] = useState(null); // State for navigation
    const articlesPerPage = 4;

    // Filter articles based on search query
    const filteredArticles = mainArticlesData.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

    const currentArticles = filteredArticles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    // --- Handlers for Detail Page ---
    const handleArticleClick = (id) => {
        setSelectedArticleId(id);
        window.scrollTo(0, 0); // Scroll to top
    };

    const handleBackToList = () => {
        setSelectedArticleId(null);
    };

    // Find the selected article
    const selectedArticle = selectedArticleId
        ? mainArticlesData.find(a => a.id === selectedArticleId)
        : null;

    // Determine breadcrumb items based on state
    const breadcrumbItems = selectedArticle
        ? [
            { label: "Home", href: "/news" },
            { label: "New & Update", href: "#", onClick: (e) => { e.preventDefault(); handleBackToList(); } },
            { label: selectedArticle.title }
        ]
        : [
            { label: "Home", href: "/news" },
            { label: "New & Update", href: "/" }
        ];

    // Modify Breadcrumb component to handle onClick
    const AppBreadcrumb = () => (
        <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.href && item.onClick ? (
                            <a href={item.href} onClick={item.onClick} className="text-blue-700 hover:underline cursor-pointer">{item.label}</a>
                        ) : item.href ? (
                            <a href={item.href} className="text-blue-700 hover:underline">{item.label}</a>
                        ) : (
                            <span className="text-gray-800">{item.label}</span>
                        )}
                        {index < breadcrumbItems.length - 1 && (
                            <span className="mx-2">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );


    return (
        <div className="font-sans text-[var(--primary-text)] bg-[var(--secondary-bg)] max-w-7xl mx-auto px-2 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-6 border-b border-[var(--primary-border)] pt-4">
                    <div className="">
                        <header className="py-4">
                            <div className="flex justify-between items-center flex-wrap gap-4">
                                {/* <AppBreadcrumb /> */}
                                <Breadcrumb items={breadcrumbItems} />
                            </div>
                        </header>
                        {/* Only show search on list page */}
                        {!selectedArticle && (
                            <SearchInput searchQuery={searchQuery} onSearchChange={handleSearchChange} />
                        )}
                    </div>
                </header>

                <div className="flex flex-col lg:flex-row gap-8">
                    <main className="w-full lg:w-2/3">

                        {/* --- Conditional Rendering for Detail Page --- */}
                        {selectedArticle ? (
                            <ArticleDetailPage article={selectedArticle} onBack={handleBackToList} />
                        ) : (
                            <>
                                <h1 className="heading-lg font-bold relative">
                                    World News
                                    <span className="absolute bottom-0 left-0 h-0.5 w-16 bg-[var(--text-hover-color)]"></span>
                                </h1>

                                <section>
                                    {currentArticles.length > 0 ? (
                                        currentArticles.map((article) => (
                                            <MainArticle
                                                key={article.id}
                                                article={article}
                                                onClick={handleArticleClick} // Pass click handler
                                            />
                                        ))
                                    ) : (
                                        <p className="py-6">No articles found matching your search.</p>
                                    )}
                                </section>

                                {filteredArticles.length > 0 && totalPages > 1 && (
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                )}
                            </>
                        )}
                        {/* --- End Conditional Rendering --- */}

                    </main>

                    {/* Right Column: Sidebar */}
                    <aside className="w-full lg:w-1/3">
                        <SidebarTabs
                            title="Latest News"
                            tabs={['In this section', 'All']}
                            moreLink={true}
                            articles={sidebarNews}
                        />
                        <SidebarTabs
                            title="Most Popular"
                            tabs={['Read', 'Shared', 'Commented']}
                            articles={popularNews}
                        />
                    </aside>
                </div>
            </div>
        </div>
    );
}