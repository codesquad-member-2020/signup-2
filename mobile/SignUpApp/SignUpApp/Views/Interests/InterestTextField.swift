//
//  InterestTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/28.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class InterestTextField: UITextField {
    
    let highlightedColor = UIColor(named: "Highlighted")!
    
    override var isHighlighted: Bool {
        didSet {
            borderColor = isHighlighted ? highlightedColor : .darkGray
        }
    }
    
    var borderColor: UIColor = .darkGray {
        didSet {
            layer.borderColor = borderColor.cgColor
        }
    }
    
    override func textRect(forBounds bounds: CGRect) -> CGRect {
        return bounds.insetBy(dx: 8, dy: 0)
    }
    
    override func editingRect(forBounds bounds: CGRect) -> CGRect {
        return bounds.insetBy(dx: 8, dy: 0)
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        layer.borderColor = UIColor.darkGray.cgColor
        layer.borderWidth = 1.5
        layer.cornerRadius = 0
        borderStyle = .none
        delegate = self
    }
}

extension InterestTextField: UITextFieldDelegate {
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        return true
    }
}
