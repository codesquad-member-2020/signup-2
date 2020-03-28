//
//  TermsTextView.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/28.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class TermsTextView: UITextView {
    
    var didScrollToBottomHandler: (() -> Void)?

    override init(frame: CGRect, textContainer: NSTextContainer?) {
        super.init(frame: frame, textContainer: textContainer)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        layer.borderColor = UIColor.darkGray.cgColor
        layer.borderWidth = 1
        isEditable = false
        delegate = self
    }
}

extension TermsTextView: UITextViewDelegate {
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        let isBottom = scrollView.contentOffset.y + scrollView.bounds.height > scrollView.contentSize.height
        if isBottom {
            didScrollToBottomHandler?()
        }
    }
}
