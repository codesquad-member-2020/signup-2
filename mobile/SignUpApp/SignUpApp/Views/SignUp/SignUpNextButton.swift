//
//  SignUpNextButton.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpNextButton: UIButton {
    
    private let keyColor = UIColor(named: "KeyColor")
    
    var isValid: Bool = false {
        didSet {
            isEnabled = isValid
            updateButtonStatus()
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func updateButtonStatus() {
        let color = isValid ? keyColor : .lightGray
        tintColor = color
    }
    
    private func configure() {
        layer.borderColor = UIColor.darkGray.cgColor
        layer.borderWidth = 1.5
        layer.cornerRadius = 0
        setTitleColor(.lightGray, for: .disabled)
        setTitleColor(keyColor, for: .normal)
        updateButtonStatus()
    }
}
